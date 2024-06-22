import pywhatkit as kit
from datetime import datetime


# Specify the phone number (with country code) and the message
phone_number = "+918886222852"
message = "Hello from Python! This is an instant WhatsApp message."

# Get the current time
now = datetime.now()

# Extract hours and minutes
current_hour = now.hour
current_minute = now.minute

kit.sendwhatmsg(phone_number, message,current_hour,current_minute+1)