async def coro1():
    print ("C1 : Start")
    print ("C2 : Stop")


async def coro2():
    print ("C2 : Start")
    print ("C2 : a")
    print ("C2 : b")
    print ("C2 : c")
    print ("C2 : Stop")

async def main():
    c1 = coro1()
    c2 = coro2()
    print (c1, c2)
    await c1
    c1.send(None)

