# HTTP Methods: GET, POST, PATCH, PUT, DELETE

## **1. GET**
- **Purpose:** Retrieves data from the server.  
- **Characteristics:**  
  - Read-only (does not modify server data).  
  - Safe and idempotent.  
  - Query parameters are sent in the URL.  
  - Cached by browsers for efficiency.  
  - Limited data size due to URL restrictions.  
- **Use Case:** Fetching resources, e.g., a web page or API data.  

## **2. POST**
- **Purpose:** Sends data to the server to create a new resource or perform an action.  
- **Characteristics:**  
  - Data is sent in the request body.  
  - Not idempotent (multiple identical requests may have different effects).  
  - Can submit larger amounts of data compared to GET.  
- **Use Case:** Submitting forms, creating a user, uploading files.  

## **3. PUT**
- **Purpose:** Updates or creates a resource at a specific URL.  
- **Characteristics:**  
  - Idempotent (repeated requests have the same result).  
  - Replaces the entire resource with the data sent in the request body.  
- **Use Case:** Updating a user’s profile entirely.  

## **4. PATCH**
- **Purpose:** Partially updates a resource at a specific URL.  
- **Characteristics:**  
  - Idempotent.  
  - Sends only the fields to be updated, unlike PUT.  
- **Use Case:** Modifying a single field, such as updating a user’s email.  

## **5. DELETE**
- **Purpose:** Deletes a resource from the server.  
- **Characteristics:**  
  - Idempotent.  
  - Removes the specified resource.  
- **Use Case:** Deleting a user account or a post.  

## **Key Differences**

| **Method**   | **Purpose**                  | **Idempotent** | **Request Body** | **Cacheable** |  
|--------------|------------------------------|----------------|------------------|---------------|  
| **GET**      | Retrieve data                | Yes            | No               | Yes           |  
| **POST**     | Create a resource            | No             | Yes              | No            |  
| **PUT**      | Update/replace a resource    | Yes            | Yes              | No            |  
| **PATCH**    | Partially update a resource  | Yes            | Yes              | No            |  
| **DELETE**   | Remove a resource            | Yes            | Optional         | No            |  

This table highlights the distinctions among the methods, helping choose the appropriate one for specific use cases.