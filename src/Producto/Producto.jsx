import './Producto.css'
import {Table,Button,Modal,ModalBody,ModalHeader,FormGroup,ModalFooter} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {useLocalStorage} from './useLocalStorage';
import  Nav from '../Nav/Nav.jsx';
  const datos1 = [
  { nombre: "TV SMART", contacto :{
    email:"SAMSUNG12@gmail.com",
    telefono:"945263854",
  },
    empresa:"SAMSUNG",
  },
   
];


function Producto({clickRegistro,setclickRegistro}){
 var id=Math.random();
 console.log(id)
const [datos,setDatos]=useLocalStorage('datos',{datos1})

  function Ver(elemento){
    Producto[0].form=elemento;
    Producto[0].ver=true;
    console.log(datos.datos1);
    setProducto({...Producto})
  
  }
  function CerrarVer(){
     Producto[0].ver=false;
    setProducto({...Producto})
  }
 
  

  function handleChangeEmpresa(e){

    Producto[0].form.empresa=e.target.value;
    setDatos(datos)
    setProducto({...Producto});
    
  }
  function handleRegistrarChangeEmpresa(e){

    
    datosregistro.form.empresa=e.target.value;
    setDatos(datos)
    Setdatosregistro({...datosregistro});
  }
    function handleChangeNombre(e){

    Producto[0].form.nombre=e.target.value;


   
    
    setProducto({...Producto});
  }
  function handleRegistrarChangeNombre(e){
    setDatos(datos);
    datosregistro.form.nombre=e.target.value;
   
    
   
  }
    function handleChangeEmail(e){
      var a=0;
    var  val='';
    for(var i=0;i<e.target.value.length;i++){
      
        if(e.target.value[i]=="@"){

            val=true

        }

    }
    
    if(val==true){
      a=1;
      val=false;
      validar.display="none";
      setvalidar({...validar})
      Producto[0].form.contacto.email=e.target.value;
 
      setDatos(datos)

      setProducto({...Producto});
      
    }else{
      if(a!=1){
      validar.display="block";
      setvalidar({...validar})
      Producto[0].form.contacto.email=e.target.value;
 
      setDatos(datos)

      setProducto({...Producto});
      }
    
    }

    
  }
  function handleRegistrarChangeEmail(e){
    var a=0;
    var  val='';
    for(var i=0;i<e.target.value.length;i++){
      
        if(e.target.value[i]=="@"){

            val=true

        }

    }
    
    if(val==true){
      a=1;
      val=false;
      validar.display="none";
      setvalidar({...validar})
      datosregistro.form.contacto.email=e.target.value;
      Setdatosregistro({...datosregistro});
      
    }else{
      if(a!=1){
      validar.display="block";
      setvalidar({...validar})
      }
    
    }
    
   
  }

    function handleChangeTelefono(e){

        var dato = e.target.value;
   var valoresAceptados = /^[0-9]+$/;
       if (dato.match(valoresAceptados)){
          validartele.display="none";
          setvalidar({...validar})
          Producto[0].form.contacto.telefono=e.target.value;
  
          setDatos(datos)
 
          setProducto({...Producto});
       } else {
          validartele.display="block";
          setvalidar({...validar})
      }
  
    
  }
  function handleRegistrarChangeTelefono(e){

    var dato = e.target.value;
   var valoresAceptados = /^[0-9]+$/;
       if (dato.match(valoresAceptados)){
          validartele.display="none";
          setvalidar({...validar})
          datosregistro.form.contacto.telefono=e.target.value;
          Setdatosregistro({...datosregistro});
       } else {
          validartele.display="block";
          setvalidartele({...validartele})
      }
  


  }
    function Editar(elemento){
      
      Producto[0].form=elemento;

      setProducto({...Producto});
      setEditar(true);
      
      
      console.log(datos)

  }
  function CancelarEditar(){
      validar.display="none";
          setvalidar({...validar})
       validartele.display="none";
          setvalidartele({...validartele})
       setEditar(false);   
  }
    function GuardarRegistrar(){
      if(validar.display=="block" || datosregistro.form.nombre=='' || datosregistro.form.contacto.email=='' || datosregistro.form.contacto.telefono=='' ||  datosregistro.form.empresa=='' ){
            alert("Ingrese Valores Validos");
          }else{
      datos.datos1.push(datosregistro.form);
      datosregistro.form={
    nombre:'',
    contacto:{email:'',telefono:''},
    empresa:'',
    }
      setclickRegistro(false);
      setDatos({...datos});
    }
        
  }
    function CancelarRegistrar(){
        validar.display="none";
          setvalidar({...validar})
        validartele.display="none";
          setvalidartele({...validartele})
      setclickRegistro(false);
  }
    function GuardarEditar(){
          if(validar.display=="block" || Producto[0].form.nombre=='' || Producto[0].form.empresa=='' || Producto[0].form.contacto.email=='' || Producto[0].form.contacto.email==''){
            alert("Ingrese Valores Validos");
          }else{
          setDatos(datos)
         setEditar(false); 
         }  
  }
  function Eliminar(elemento){
    var contador =0;
    Producto[0].form=elemento;
    
    datos.datos1.map((registro)=>{
      console.log(registro.nombre)
      console.log(Producto[0].form.nombre)
    if(Producto[0].form.nombre==registro.nombre){
      datos.datos1.splice(contador,1)
    }
    contador++;
  });

setDatos(datos);
setProducto({...Producto})
  }


const [datosregistro,Setdatosregistro]=useState({form:{
    nombre:'',
    contacto:{email:'',telefono:''},
    empresa:'',
    },})
const [validartele,setvalidartele]=useState({style:'danger',text:'Ingrese un Valor Numerico',display:"none"});
const [validar,setvalidar]=useState({style:'danger',text:'Ingrese un Valor Valido',display:"none"});
const [editar,setEditar] = useLocalStorage('editar',false);
const [Producto,setProducto] = useLocalStorage('Producto',[
  {
    datos:datos.datos1,
    form:{
    nombre:'',
    contacto:{email:'',telefono:''},
    empresa:'',
    },
    ver:false,
    
  }]
  );
  return (
    <div className="Producto">
      <div className="Producto_Title">
        <h3>Producto</h3>
        <p>Administra tus Productos</p>
      </div>
      <div className="Producto_Table">
        <Table>
          <thead>
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Contacto Empresa</th>
              <th scope="col">Empresa</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
          {datos.datos1.map((elemento)=>(
            <tr key={id} >
              <th>{elemento.nombre}</th>
              <td>Email: {elemento.contacto.email}<br/>Telefono: {elemento.contacto.telefono}</td>
              <td>{elemento.empresa}</td>
              <th>
                <th className="Botones">
                  <td><button onClick={()=> Ver(elemento)}>Ver</button></td>
                  <td><button onClick={()=> Editar(elemento)}>Editar</button></td>
                  <td><button onClick={()=> Eliminar(elemento)}>Eliminar</button></td>
                </th>
              </th>
            </tr>
            ))}
          </tbody>
        </Table>  

      </div>
        <Modal isOpen={Producto[0].ver}>
        <ModalHeader>
          <div>
            <h3>Producto: {Producto[0].form.nombre}</h3>
          </div>

        </ModalHeader>
          <ModalBody>
          <FormGroup className="LabelVer">
            <label className="LabelTitulo">Nombre:</label>
            <label>&nbsp;{Producto[0].form.nombre}</label>
            
          </FormGroup>
          <FormGroup className="LabelVer">
            <label className="LabelTitulo">Empresa:</label>
            <label>&nbsp;{Producto[0].form.empresa}</label>
            
          </FormGroup>
            <FormGroup className="LabelVer">
            <label className="LabelTitulo" >Email:</label>
            <label>&nbsp;{Producto[0].form.contacto.email}</label><br/><br/>
            <label className="LabelTitulo" >Telefono:</label>
            <label>&nbsp;{Producto[0].form.contacto.telefono}</label>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={CerrarVer} >Cerrar</Button>
        </ModalFooter>  
        </Modal>


       <Modal isOpen={editar}>
        <ModalHeader>
          <div>
            <h3>Editar Producto</h3>
          </div>
          <Button color="danger" onClick={CancelarEditar}>X</Button>

        </ModalHeader>
          <ModalBody>
          <FormGroup>
            <label>Nombre:</label>
            <input className="form-control" name="nombre" type="text" value={Producto[0].form.nombre} onChange={(e)=>handleChangeNombre(e)}/>
          </FormGroup>
          <FormGroup>
            <label>Empresa</label>
            <input className="form-control" name="empresa"  type="text" value={Producto[0].form.empresa} onChange={(e)=>handleChangeEmpresa(e)}/>
          </FormGroup>
            <FormGroup>
            <label>Email</label>
            <input className="form-control"   type="text" value={Producto[0].form.contacto.email} onChange={(e)=>handleChangeEmail(e)}/>
             <p style={{color:"#8D1E1E",display:validar.display}} >{validar.text}</p>
         
          </FormGroup>
            <FormGroup>
            <label>Telefono</label>
            <input className="form-control"  type="text" value={Producto[0].form.contacto.telefono} onChange={(e)=>handleChangeTelefono(e)} />
            <p style={{color:"#8D1E1E",display:validartele.display}} >{validartele.text}</p>
          
          </FormGroup>
           




        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={GuardarEditar}>Guardar</Button>
        </ModalFooter>  
      </Modal> 



             <Modal centered={true} isOpen={clickRegistro}>
        <ModalHeader>
          <div>
            <h3>Registrar Producto</h3>
          </div>
          <Button color="danger" onClick={CancelarRegistrar}>X</Button>

        </ModalHeader>
          <ModalBody>
          <FormGroup>
            <label>Nombre Producto:</label>
            <input className="form-control" name="nombre" type="text"  onChange={(e)=>handleRegistrarChangeNombre(e)}/>
          </FormGroup>
          <FormGroup>
            <label>Empresa</label>
            <input className="form-control" name="empresa"  type="text" onChange={(e)=>handleRegistrarChangeEmpresa(e)}/>
          </FormGroup>
            <FormGroup>
            <label>Email-Empresa</label>
            <input className="form-control"   type="text"   onChange={(e)=>handleRegistrarChangeEmail(e)}/>
            <p style={{color:"#8D1E1E",display:validar.display}} >{validar.text}</p>
          </FormGroup>
            <FormGroup>
            <label>Telefono-Empresa</label>
            <input className="form-control"  type="text" onChange={(e)=>handleRegistrarChangeTelefono(e)} />
            <p style={{color:"#8D1E1E",display:validartele.display}} >{validartele.text}</p>
          </FormGroup>
           




        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={GuardarRegistrar}>Guardar</Button>
        </ModalFooter>  
      </Modal> 


    </div>



    
  );
}

export default Producto;