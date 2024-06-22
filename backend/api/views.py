from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Farmer
from .serializers import FarmerSerializer,MediaFileSerializer

@api_view(['GET', 'POST'])
def users_list(request):
    if request.method == 'GET':
        data = Farmer.objects.all()
        serializer = FarmerSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = FarmerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT', 'DELETE'])
def users_detail(request):
    try:
        user = Farmer.objects.get(id=id)
    except Farmer.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'PUT':
        username = request.data.get('name')
        password = request.data.get('password')
        if user.username==username & user.password==password:
            return Response(serializer.errors, status=status.HTTP_200_OK)

    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['POST'])
def videoupload(request):
    if request.method == 'POST':
        serializer = MediaFileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

0