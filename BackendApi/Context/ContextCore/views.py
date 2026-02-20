from django.shortcuts import render
from django.contrib.auth import authenticate, get_user_model
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated 
from .serializers import RegisterSerializer, UserSerializer
# Create your views here.



class LoginView(APIView):
    
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        
        user = authenticate(username=username, password=password)
        
        
        if user is not None:
            refresh = RefreshToken.for_user(user)
            
            return Response({
                "user": user.username,
                "access": str(refresh.access_token),
                "refresh": str(refresh),
            })
            
        return Response({
            "error": "Invalid Credentials"
        },
            status=status.HTTP_401_UNAUTHORIZED               
        )
        
        
class RegisterView(APIView):
    
    def post(self, request):
       serializer = RegisterSerializer(data=request.data)
       
       if serializer.is_valid():
           serializer.save()
           return Response(serializer.data)
       
       return Response(serializer.error, status=400)
   
   
class ProfileView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
        
        
        
        
# eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzcxNDg4MTkyLCJpYXQiOjE3NzE0ODc4OTIsImp0aSI6IjA5ZjRiZTAwZmZjMTRjZjBiNjIzMzQ0N2ZjYzNlOTFlIiwidXNlcl9pZCI6IjIifQ.tnlRmHML2WRQwFj038fMyfsTy-k-dtq5Phpwi67hI6Y