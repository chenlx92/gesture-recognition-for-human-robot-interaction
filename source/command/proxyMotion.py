__author__ = 'Aravinth Panchadcharam'
__email__ = "me@aravinth.info"
__date__ = '19/09/15'

import time
from naoqi import ALProxy

robotIP = "nao5.local"
PORT = 9559
motionProxy = ALProxy("ALMotion", robotIP, PORT)
postureProxy = ALProxy("ALRobotPosture", robotIP, PORT)

# Wake up robot
motionProxy.wakeUp()

# Go to rest position
# motionProxy.rest()
