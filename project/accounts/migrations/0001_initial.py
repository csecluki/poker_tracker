# Generated by Django 4.1.7 on 2023-02-20 19:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('account_type', models.CharField(choices=[('M', 'Money'), ('C', 'Chips')], max_length=1)),
                ('name', models.CharField(blank=True, max_length=64, null=True)),
                ('balance', models.DecimalField(decimal_places=2, default=0, max_digits=8)),
            ],
        ),
    ]