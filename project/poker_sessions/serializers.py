import datetime
from rest_framework import serializers

from .models import Session


class SessionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Session
        fields = '__all__'


class StartSessionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Session
        fields = ['account', 'tables', 'big_blind', 'capital_per_table', 'balance_before', 'start']


class EndSessionSerializer(serializers.Serializer):
    
    id = serializers.IntegerField()
    rebuys = serializers.IntegerField()
    hands = serializers.IntegerField()
    balance_after = serializers.FloatField()
    end = serializers.DateTimeField()
