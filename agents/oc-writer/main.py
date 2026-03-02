import os
import time
import json
import redis
from dotenv import load_dotenv

load_dotenv()

def main():
    print("--- OC Content Writer Starting ---")
    redis_url = os.getenv('REDIS_URL', 'redis://redis:6379')
    # Simple redis connection for Python
    r = redis.from_url(redis_url)
    
    print(f"Connected to Redis at {redis_url}")
    
    while True:
        r.publish('LOGS:OC_WRITER', json.dumps({"level": "INFO", "msg": "Content Writer Heartbeat"}))
        time.sleep(60)

if __name__ == "__main__":
    main()
