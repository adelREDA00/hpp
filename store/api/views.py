from rest_framework.response import Response
from rest_framework.decorators import api_view
from basstore.models import Members
from .serializers import MemberSerializer

@api_view(['GET'])
def getdata(request):
    members = Members.objects.all()
    serializer = MemberSerializer(members , many=True)
    return Response(serializer.data)



@api_view(['POST'])
def passdata(request):
    serializer = MemberSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors)


@api_view(['GET','PUT','DELETE'])
def member(request,pk):
    member = Members.objects.get(pk=pk)
    if request.method == 'GET':
        serializer = MemberSerializer(member)
        return Response(serializer.data)
    if request.method == 'PUT':
        serializer = MemberSerializer(member ,data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return serializer.errors