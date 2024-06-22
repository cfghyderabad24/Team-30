import smtplib
from email.message import EmailMessage

def email_alert(subject, body, to):
    msg=EmailMessage()
    msg.set_content(body)
    msg['Subject']=subject
    msg['to']=to

    user="shubhamkrsahoo100@gmail.com"
    msg['from']=user
    password="kepk hsrf ovpm tama"
    server=smtplib.SMTP("smtp.gmail.com", 587)
    server.starttls()
    server.login(user, password)
    server.send_message(msg)

    server.quit()

if __name__ == "__main__":
    email_alert("hey","hello world", "shubhamkrsahoo001@gmail.com")
