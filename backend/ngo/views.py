from django.db.models import Q
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.models import Farmer
from api.serializers import FarmerSerializer


@api_view(['POST'])
def users_list(request):
    username = request.data.get('name')
    password = request.data.get('password')
    user_type = request.data.get('user_type')

    if user_type == "admin" and username == "admin" and password == "admin":
        return Response({'success': 'Login Success'}, status=status.HTTP_200_OK)
    else:
        flag = Farmer.objects.filter(Q(name=username) & Q(password=password)).exists()
        if flag:
            return Response({'success': 'Login Success'}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Login failed'}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def list(request):
    if request.method == 'GET':
        data = Farmer.objects.all()
        serializer = FarmerSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
