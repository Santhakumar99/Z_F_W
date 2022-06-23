import { useState ,useEffect } from 'react'
import emailjs from 'emailjs-com'
import "../components/css/admin.css"
import ZFWlogo from "../images/zfw2.png"
import Navigation from './navigation'
import MenuAppBar from './Appbar'
import axios from 'axios'
import { DataGrid } from '@mui/x-data-grid';
import DataTable from "react-data-table-component";
import moment from 'moment'
const AdminDashboard = (props) => {
     
    const [toggleState, setToggleState] = useState(1);
  const [users, setUsers] = useState([{}]);
  const [resUsers, setResusers] = useState([{}]);
  const [otherUsers, setOtherusers] = useState([{}]);
  const[userQueries,setUserQueries]=useState([{}])
    const toggleTab = (index) => {
        setToggleState(index);
  };
  
  const getUsersData = async() => {
    try {
      const result = await axios.get(`${process.env.REACT_APP_URL}users/data`)
      console.log(result.data?.data)

      const Users = result.data?.data;
      const RestraurantUsers = Users.filter((item) => item.loginType === "restraurant");
      const OtherUsers = Users.filter((item) => item.loginType === "otherproviders");


      if (RestraurantUsers && RestraurantUsers) {
        let array1 = RestraurantUsers;

        // let array = result != null && result.data != null && result.data.data;
        for (let i = 0; i < array1.length; i++) {
          const element = array1[i];
          element.id = i + 1;
        }
        setResusers(array1)
      }
      if (OtherUsers && OtherUsers) {
        let array2 = OtherUsers;

        // let array = result != null && result.data != null && result.data.data;
        for (let i = 0; i < array2.length; i++) {
          const element = array2[i];
          element.id = i + 1;
        }
        setOtherusers(array2)
      }
    }
    catch (err)
    {
      console.log(err)
    }
}
const getUsersQueryData = async() => {
  try {
    const result = await axios.get(`${process.env.REACT_APP_URL}userqueries/data`)
    console.log(result.data?.data)

    const Users = result.data?.data;
    // const RestraurantUsers = Users.filter((item) => item.loginType === "restraurant");
    // const OtherUsers = Users.filter((item) => item.loginType === "otherproviders");

    if (Users && Users) {
      let array = Users;
      // let array = result != null && result.data != null && result.data.data;
      for (let i = 0; i < array.length; i++) {
        const element = array[i];
        element.id = i + 1;
        element.assignedDate = moment(element.createdOn).format('DD-MM-YYYY');
      }
      setUserQueries(array)
    }
  }
  catch (err)
  {
    console.log(err)
  }
}
  useEffect(() => {
    getUsersData()
    getUsersQueryData()
  }, [])
  
  const restraurantColumns = [
    {
      name: "S.no",
      selector: "id",
      width:"100px",
      sortable: true,
      format: (row) => {
        return row.id;
      },
      wrap: true,
    },
    {
      name: "User Name",
      selector: "userName",
      sortable: true,
      format: (row) => {
        return row.userName;
      },
      wrap: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
      format: (row) => {
        return row.email;
      },
      wrap: true,
    },
    {
      name: "Mobile",
      selector: "mobile",
      sortable: true,
      format: (row) => {
        return row.mobile;
      },
      wrap: true,
    },
    {
      name: "Restraurant Name",
      selector: "Rname",
      sortable: true,
      format: (row) => {
        return row.Rname?row.Rname:"-";
      },
      wrap: true,
    },
    {
      name: "Address",
      selector: "address",
      sortable: true,
      format: (row) => {
        return row.address;
      },
      wrap: true,
    },
    {
      name: "Type",
      selector: "loginType",
      sortable: true,
      format: (row) => {
        return row.loginType;
      },
      wrap: true,
    }
  ];
  const otherProviderColumns = [
    {
      name: "S.no",
      selector: "id",
      width:"100px",
      sortable: true,
      format: (row) => {
        return row.id;
      },
      wrap: true,
    },
    {
      name: "User Name",
      selector: "userName",
      sortable: true,
      format: (row) => {
        return row.userName;
      },
      wrap: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
      format: (row) => {
        return row.email;
      },
      wrap: true,
    },
    {
      name: "Mobile",
      selector: "mobile",
      sortable: true,
      format: (row) => {
        return row.mobile;
      },
      wrap: true,
    },
    // {
    //   name: "Restraurant Name",
    //   selector: "Rname",
    //   sortable: true,
    //   format: (row) => {
    //     return row.Rname?row.Rname:"-";
    //   },
    //   wrap: true,
    // },
    {
      name: "Address",
      selector: "address",
      sortable: true,
      format: (row) => {
        return row.address;
      },
      wrap: true,
    },
    {
      name: "Type",
      selector: "loginType",
      sortable: true,
      format: (row) => {
        return row.loginType;
      },
      wrap: true,
    }
  ];
  const UserQueryColumns = [
    {
      name: "S.no",
      selector: "id",
      sortable: true,
      width:"100px",
      format: (row) => {
        return row.id;
      },
      wrap: true,
    },
    {
      name: "Name",
      selector: "name",
      sortable: true,
      format: (row) => {
        return row.name;
      },
      wrap: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
      format: (row) => {
        return row.email;
      },
      wrap: true,
    },
    {
      name: "Message",
      selector: "message",
      sortable: true,
      format: (row) => {
        return row.message? row.message:"-";
      },
      wrap: true,
    },
    {
      name: "Date of Posted",
      selector: "assignedDate",
      sortable: true,
      format: (row) => {
        return row.assignedDate;
      },
      wrap: true,
    },
  ];
  
  const conditionalRowStyles = [
    {
      when: (row) => row,
      style: {
        // backgroundColor: 'green',
        border: "1px black",
        color: "black",
        fontWeight: 500,
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
  ];
  const customStyles = {
    headCells: {
      style: {
        // paddingLeft: "8px", // override the cell padding for head cells
        // paddingRight: "8px",
        backgroundColor: "#1976d2",
        color: "white",
        fontWeight: 700,
        fontSize: "13px",
      },
    },
    cells: {
      style: {
        fontSize: "14px",
        // paddingLeft: "0 8px",
        // backgroundColor: "#0984e1",
      },
    },
  };

  return (
      <div> 
      <MenuAppBar/>
            <h2 style={{margin:"10px",padding:"10px"}}>Providers List </h2>
              <div className="col-12 bloc-tabs">
              <div className="row" style={{ width: "100%" }}>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                  >
                Restraurant Providers
                  </button>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
                  <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                  >
               Other Providers
                  </button>
                </div>
              </div>
              </div>
            {/* </div> */}

   { /*---------------------------------------- Restraurent  Providers Table -------------------------------------------- */}
            <div className="col-12">
              <div className={ toggleState === 1 ? "content  active-content" : "content" }>
          {/* <h3>Restraurant Providers</h3> */}
          

          <div style={{  width: '100%',marginTop:"30px" }}>
          <DataTable
          noHeader
          // pagination
          // paginationServer
          className="react-dataTable"
          columns={restraurantColumns}
          pagination={true}
          paginationPerpage={5}
          customStyles={customStyles}
                  conditionalRowStyles={conditionalRowStyles}
          data={resUsers}
        />
    </div>
     </div>
            </div>

      
            { /*---------------------------------------- Other Providers Table -------------------------------------------- */}

      <div className="col-12">
     <div
  className={
    toggleState === 2 ? "content  active-content" : "content" }
>
       {/* <h3>Other Providers</h3> */}
       <div style={{  width: '100%',marginTop:"30px" }}>
          <DataTable
          noHeader
          // pagination
          // paginationServer
          className="react-dataTable"
          columns={otherProviderColumns}
          pagination={true}
          paginationPerpage={5}
          customStyles={customStyles}
                  conditionalRowStyles={conditionalRowStyles}
          data={otherUsers}
        />
    </div>
</div>
      </div>
      
     { /*---------------------------------------- Users Query List-------------------------------------------- */}
      
      <h2 style={{ margin: "10px", padding: "10px" }}>Users Queries List </h2>
      
      <div style={{ width: '100%' }}>
          <DataTable
          noHeader
          // pagination
          // paginationServer
          className="react-dataTable"
          columns={UserQueryColumns}
          pagination={true}
          paginationPerpage={5}
          customStyles={customStyles}
                  conditionalRowStyles={conditionalRowStyles}
          data={userQueries}
        />
    </div>

        </div>
  )
}
export default AdminDashboard