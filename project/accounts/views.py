from django.http import JsonResponse

from rest_framework.decorators import api_view

from accounts.models import Account
from accounts.serializers import AccountSerializer


@api_view(['GET'])
def home(request):
    accounts = Account.objects.all()
    serializer = AccountSerializer(accounts, many=True)
    return JsonResponse(serializer.data, safe=False, status=200)


@api_view(['POST'])
def add(request):
    return JsonResponse(data={}, status=404)
    # form = AccountForm(request.POST or None)
    # if request.method == 'POST' and form.is_valid():
    #     form.save()
    #     return redirect('account:home')
    # return render(request,
    #               'accounts/add.html',
    #               {'form': form}
    #               )


@api_view(['GET'])
def detail(request, account_id):
    account = Account.objects.get(id=account_id)
    serializer = AccountSerializer(account)
    return JsonResponse(serializer.data, safe=False, status=200)