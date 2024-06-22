from rest_framework import viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def users_list(request, username, password):
    if username == "admin" & password == "admin":
        return Response({'success': 'Login Success'}, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Login failed'}, status=status.HTTP_404_NOT_FOUND)
