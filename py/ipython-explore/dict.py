# coding: utf-8
d = dict()
d
d.update(key=2,value=3)
d
d.update(key=4)
d
d.update(a=2,b=3)
a
d
len(d)
d.update(exist=None)
d
len(d)
i = iter(d)
[*i]
i
[*]
[*i]
a = dict(one=1, two=2, three=3)
a
b = dict(zip(['one', 'two', 'three'], [1,2,3]))
b
c = dict([('two', 2)])
c
c.update([('three', 3)])
c
c.clear()
c
get_ipython().magic('save')
get_ipython().magic('save dict.py')
get_ipython().magic("dict './dict.py'")
get_ipython().magic("save './dict.py'")
