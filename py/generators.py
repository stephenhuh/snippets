#https://stackoverflow.com/questions/1756096/understanding-generators-in-python
def myGen(n):
    yield n
    yield n + 1

g = myGen(10)

#Shows that you can for in into a generator
for n in g:
    print(n)

#A generator object is generated once but its code is not run all at once




