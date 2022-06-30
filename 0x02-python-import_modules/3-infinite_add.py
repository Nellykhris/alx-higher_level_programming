#!/usr/bin/python3
if __name__ == "__main__":
    import sys
    add = 0
    for s in sys[1:]:
        add += int(s)
        print("{:d}".format(add))
