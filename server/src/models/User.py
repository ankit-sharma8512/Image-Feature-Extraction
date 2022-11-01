import re

email_regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
password_regex = r'^[A-Za-z0-9]{8,}$'


class User:
    def __init__(self, user):
        self.name = user['name']
        self.email = user['email']
        self.password = user['password']


def validateUser(user):
    try:
        parameters = ['name', 'email', 'password']
        if all(item in user for item in parameters):
            if re.fullmatch(email_regex, user['email']) and re.fullmatch(password_regex, user['password']):
                return True
            raise Exception("Check format of email and password")
        else:
            raise Exception("Invalid Parameters")
    except Exception as e:
        print(str(e))
        return False


def validate_login(user):
    try:
        parameters = ['email', 'password']
        if all(item in user for item in parameters):
            if re.fullmatch(email_regex, user['email']) and re.fullmatch(password_regex, user['password']):
                return True
            raise Exception("Check format of email and password")
        else:
            raise Exception("Invalid Parameters")
    except Exception as e:
        print(str(e))
        return False
