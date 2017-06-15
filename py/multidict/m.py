from multidict import MultiDict, MultiDictProxy

dictx = MultiDict({})
print(dictx)
dictm = MultiDictProxy(dictx)
print(dictm)

