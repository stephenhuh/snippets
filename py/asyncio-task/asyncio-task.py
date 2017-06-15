# https://docs.python.org/3/library/asyncio-task.html
import asyncio

async def hello_world():
    print("Hello world")

loop = asyncio.get_event_loop()

loop.run_until_complete(hello_world())
loop.close()

