import gym
import time
import tensorflow as tf
import tflearn
import numpy as np
import seaborn as sns
import matplotlib
# %matplotlib inline

env = gym.make("CartPole-v0")
obs = env.reset()
for _ in range(1000):
    env.render()
    env.step(env.action_space.sample())
env.close()
