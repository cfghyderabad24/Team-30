from rest_framework import serializers
from .models import Farmer

class SeedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Farmer.SeedsUsed.rel.to
        fields = '__all__'

class FarmerSerializer(serializers.ModelSerializer):
    seeds_used = SeedSerializer(many=True)
    class Meta:
        model = Farmer
        fields = '__all__'
