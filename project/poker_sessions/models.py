from django.db import models

from accounts.models import Account


class ActiveManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(end=None)


class EndedManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().exclude(end=None)


class Session(models.Model):

    class Meta:
        ordering = ['-end']

    objects = models.Manager()
    active = ActiveManager()
    ended = EndedManager()

    start = models.DateTimeField(auto_now_add=True)
    end = models.DateTimeField(null=True, blank=True)
    account = models.ForeignKey(Account, on_delete=models.CASCADE)
    tables = models.PositiveSmallIntegerField()
    big_blind = models.DecimalField(max_digits=12, decimal_places=2)
    capital_per_table = models.DecimalField(max_digits=12, decimal_places=2)
    rebuys = models.PositiveSmallIntegerField(null=True, blank=True)
    hands = models.PositiveSmallIntegerField(null=True, blank=True)
    balance_before = models.DecimalField(max_digits=16, decimal_places=2, null=True, blank=True)
    balance_after = models.DecimalField(max_digits=16, decimal_places=2, null=True, blank=True)

    @property
    def duration(self):
        try:
            return self.end - self.start
        except TypeError:
            return 'ACTIVE'

    @property
    def balance_change(self):
        try:
            return self.balance_after - self.balance_before
        except TypeError:
            return None

    @property
    def roa(self):
        try:
            return self.balance_change / self.total_capital_used
        except TypeError:
            return None

    @property
    def total_capital_used(self):
        return (self.tables + (self.rebuys or 0)) * self.capital_per_table
