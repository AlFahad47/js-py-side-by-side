age =20

if age>=18:
    print("Adult")
elif age>=13:
    print("Teen")
else:
    print("Child")

# Truthy/Falsy: Python also uses truthy/falsy evaluation, but its falsy values are slightly different (0, 0.0, "", [], {}, None, False).

value = []

if not value:
    print("False value")


# Nested conditions

has_license = True

if age >=20:
    if has_license:
        print("Yes you can drive")
    else:
        print("Adult but can't drive")
else:
    print("Too young to drive")