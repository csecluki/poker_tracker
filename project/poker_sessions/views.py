from django.http import JsonResponse
from rest_framework.decorators import api_view

from poker_sessions.models import Session
from poker_sessions.serializers import EndSessionSerializer, SessionSerializer, StartSessionSerializer


@api_view(['GET'])
def home(request):
    sessions = Session.objects.all()
    serializer = SessionSerializer(sessions, many=True)
    return JsonResponse(serializer.data, safe=False, status=200)


@api_view(['GET'])
def ended(request):
    sessions = Session.ended.all()
    serializer = SessionSerializer(sessions, many=True)
    return JsonResponse(serializer.data, safe=False, status=200)


@api_view(['GET'])
def active(request):
    session = Session.active.first()
    if not session:
        return JsonResponse({}, status=200)
    serializer = SessionSerializer(session, many=False)
    return JsonResponse(serializer.data, safe=False, status=200)


@api_view(['POST'])
def start(request):
    serializer = StartSessionSerializer(data=request.data)
    if serializer.is_valid() and not Session.active.first():
        serializer.save()
        return JsonResponse(data={}, status=200)
    return JsonResponse(data={}, status=400)

@api_view(['POST'])
def end(request):
    serializer = EndSessionSerializer(data=request.data)
    active_session = Session.active.first()
    if serializer.is_valid() and active_session.id == serializer.validated_data['id']:
        Session.active.update_or_create(serializer.validated_data)
    return JsonResponse(data={}, status=200)
