import React , {useState} from "react"

const SearchJob = ({Job}) => {
     
    const [keyword, setkeyword] = useState("");
    const [location, setLocation] = useState("UAE");
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        //url for api
     const query = `https://url-for-api/jobs="{keyword}&location=&{location}`
      
     try{
        const response = await fetch(query);
        const data = await response.json();
        setResults(data.jobs || []);
     } catch(error){
         console.error("Error fetching jobs:", error);
     }


    };


    return(
        <div className="SearchJob p-4 max-w-2xl mx-auto">
         <h2 className="text-2xl font-bold mb-4">Find Jobs</h2>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
           <input
           
           type="text"
           placeholder="Search for a job..."
           value={keyword}
           onChange={(e) => setkeyword(e.target.value)}
           className="p-2 border rounded w-full"
           
           />
           <select 
           
           value={location}
           onChange={(e) => setLocation(e.target.value)}
           className="p-2 border rounded"
           
           >
            <option value="UAE">UAE</option>
            <option value="kenya">Kenya</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="India">India</option>       
           </select>
           <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-bue-700"
           >
           Search
           </button>
          </div>
          <div>
            {results.length > 0 ? (
                <ul className="space-y-3">
                 {
                    results.map((Job, index) => (
                        <li key={index} className="border p-3 rounded shadow">
                         <h3 className="font-bold text-lg">{Job.title}</h3>
                         <p className="text-sm text-gray-600">{Job.company} - {Job.location}</p>
                        </li>
                    ))
                 }
                </ul>

            ) : (
                <p>No jobs found or waiting for input...</p>
            )}
          </div>
        </div>
    );
};

export default SearchJob;