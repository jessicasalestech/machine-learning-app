import time
import numpy as np
from app import model, vectorizer  

def predict(text):
    X_new = vectorizer.transform([text])
    return model.predict(X_new)

def benchmark():
    start_time = time.time()
    
   
    num_tests = 1000
    texts = ["example text" for _ in range(num_tests)]


    for text in texts:
        predict(text)
    
    end_time = time.time()
    duration = end_time - start_time
    print(f"Benchmark completed in {duration:.2f} seconds for {num_tests} predictions.")

if __name__ == "__main__":
    benchmark()
