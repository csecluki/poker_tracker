from rest_framework.routers import DefaultRouter

from accounts.views import home, detail
from poker_sessions.views import home

router = DefaultRouter()

router.register(
    'accounts',
    [
        ('', home),
        ('<int:account_id>', detail)
    ],
    basename='accounts')

router.register(
    'poker_sessions',
    [
        ('', home),
    ],
    basename='poker_sessions')

urlpatterns = router.urls
