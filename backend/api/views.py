# views.py
from rest_framework import viewsets
from rest_framework.response import Response

from .models import Farmer
from .serializers import FarmerSerializer

class FarmerSerializer(APIView):
    def get(self, request, id=None):
        if id is not None:
            try:
                user = Farmer.objects.get(id=id)
                serializer = FarmerSerializer(user)
                return Response(serializer.data)
            except Farmer.DoesNotExist:
                return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
        users = Farmer.objects.all()
        serializer = FarmerSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = FarmerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, id=None,password=None):
        try:
            user = Farmer.objects.get(id=id)
        except Farmer.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

        # Extract password from request data
        #password = request.data.get('password')

        if password is None:
            return Response({'error': 'Password must be provided'}, status=status.HTTP_400_BAD_REQUEST)

        # Update user's password
        user.password = password
        user.save()

        serializer = FarmerSerializer(user)
        return Response({'sucess': 'Updated Password'}, status=status.HTTP_200_OK)

