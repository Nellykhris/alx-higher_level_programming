#!/usr/bin/python3
def uppercase(str):
    result = ""
    for i in str:
            if ord(i) >= 97 and ord(i) <= 122:
                caps = ord(i) - 32
                result += chr(caps)
            else:
                result += i
    print("{}".format(result))
