from django.db import models


class Account(models.Model):

    objects = models.Manager()

    class AccountType(models.TextChoices):
        MONEY = "M", "Money"
        CHIPS = "C", "Chips"

    account_type = models.CharField(max_length=1, choices=AccountType.choices)
    name = models.CharField(max_length=64, null=True, blank=True)
    balance = models.DecimalField(max_digits=8, decimal_places=2, default=0)

    def __str__(self):
        return self.name
