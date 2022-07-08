import imp
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from . import disburse
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.

def index(request):
    return render(request, "index.html")

@csrf_exempt
def payment(request):
    
    if request.method == "POST":
        
        data = json.loads(request.body)
        
        case_id = data.get("case_id", "")

        result = disburse.update_payment(case_id)



        if result:
            return JsonResponse(
                {
                "response": "Successfuly Updated"
            }
            )
        else:
            return JsonResponse({
                "response": "Payment Update Failed"
            })
