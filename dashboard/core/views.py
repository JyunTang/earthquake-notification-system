import logging

from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic import TemplateView
from django.utils import timezone

logger = logging.getLogger(__name__)

def HomeView(request):
    return HttpResponse("Hello, This is a Earthquake Notification System!")

class IndexView(TemplateView):
    template_name = "index.html"
    logger.debug("Logging can work!")

    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data(**kwargs)
        context['now'] = timezone.now()
        
        return context
