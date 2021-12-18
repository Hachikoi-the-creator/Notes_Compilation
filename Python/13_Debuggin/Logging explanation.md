1. It's pretty much ike an advanced way of using rpint statements to heck if the program is working as intended
2. Must import <logging> and write something like 
   * logging.basicConfig(level=logging.DEBUG, format=' %(asctime)s -  %(levelname)s -  %(message)s')
     To activate the module in "default mode"
3. You can disable all the log calls just by writing <logging.disable(logging.CRITICAL)> before the loggin call
   Or pass a lower logging level instead of critical [info, debug, error, etc]
4. To save the logging text into a fil instead just write logging.basicConfig(**filename='myProgramLog.txt'**, level=logging.DEBUG, format='
   %(asctime)s - %(levelname)s - %(message)s')

<href="https://www.youtube.com/watch?v=g8nQ90Hk328">SOCRATICA