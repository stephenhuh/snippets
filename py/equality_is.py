# note non-deterministic behavior here based on version and env.
# python allocates diff objects based on size of ints, making is and == confusing sometimes
import platform
print(platform.python_version())
a = 256
assert(a == 256)
assert(a is 256)

b = 257
print(id(b), id(257))
assert(b == 257)
assert(b is 257)

