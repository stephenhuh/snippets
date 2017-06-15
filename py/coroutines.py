def jumping_range(up_to):
    #Sending a value into the generator here (thereby making it a coroutine)
    #will shift it up
    index = 0
    while index < up_to:
        print ("up2",up_to)
        #you yield (send,next) at the same spot
        jump = yield index
        print ("jump", jump)
        if jump is None:
            jump = 1
        index += jump


