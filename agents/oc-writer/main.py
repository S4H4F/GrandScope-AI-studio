import os
import time
import json
import redis
import requests
from dotenv import load_dotenv

load_dotenv()

def process_task(task):
    """
    Simulates calling OpenRouter API to generate content.
    In a real implementation, this would use os.getenv('OPENROUTER_API_KEY').
    """
    model = task.get('assignedModel', 'deepseek/v3')
    topic = task.get('topic', 'AI')
    task_type = task.get('type', 'blog-post')
    
    print(f"--- Processing {task_type} on {topic} using {model} ---")
    
    # Simulate API call latency
    time.sleep(2)
    
    content = f"Generated {task_type} about {topic} using {model}.\n\n"
    content += "This is a masterpiece of AI-generated content, optimized for SEO and engagement."
    
    return {
        "status": "COMPLETED",
        "content": content,
        "tokens": 450,
        "cost": 0.0, # Free tier for deepseek/v3 in this simulation
        "outputPath": f"outputs/content/{task_type}_{int(time.time())}.md"
    }

def main():
    print("--- OC Content Writer Starting ---")
    redis_url = os.getenv('REDIS_URL', 'redis://redis:6379')
    r = redis.from_url(redis_url, decode_responses=True)
    
    print(f"Connected to Redis at {redis_url}")
    
    pubsub = r.pubsub()
    pubsub.subscribe('TASKS:OC_WRITER')
    
    r.publish('LOGS:OC_WRITER', json.dumps({"agent": "oc-writer", "level": "INFO", "msg": "Content Writer Online and Listening"}))
    
    for message in pubsub.listen():
        if message['type'] == 'message':
            try:
                task = json.loads(message['data'])
                r.publish('LOGS:OC_WRITER', json.dumps({"agent": "oc-writer", "level": "INFO", "msg": f"Started processing: {task.get('topic')}"}))
                
                result = process_task(task)
                
                # Save to file (simulated directory structure)
                output_path = str(result['outputPath'])
                os.makedirs(os.path.dirname(output_path), exist_ok=True)
                with open(output_path, 'w') as f:
                    f.write(str(result['content']))
                
                response = {
                    "taskId": task.get('id'),
                    "agent": "oc-writer",
                    "result": result
                }
                
                r.publish('TASKS:RESULTS', json.dumps(response))
                r.publish('LOGS:OC_WRITER', json.dumps({"agent": "oc-writer", "level": "INFO", "msg": f"Finished: {task.get('topic')}. Saved to {result['outputPath']}"}))
                
            except Exception as e:
                error_msg = f"Error processing task: {str(e)}"
                print(error_msg)
                r.publish('LOGS:OC_WRITER', json.dumps({"agent": "oc-writer", "level": "ERROR", "msg": error_msg}))

if __name__ == "__main__":
    main()
