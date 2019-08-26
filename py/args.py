def two_multiply(x,y):
    print(x*y)

two_multiply(4, 5)

def multiply(*args):
    z = 1
    for num in args:
        z *= num
    print(z)

multiply(1,2,3,4,5)


#3.6 above ordered
def print_kwargs(**kwargs):
    print(kwargs)
    for k,v in kwargs.items():
        if k is 'kwargs_1':
            print('::',kwargs1)
        print(k, v)

print_kwargs(kwargs_1='hello', kwargs_2='world', kwargs_3='reverse')


