package fpw.rest;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.madrone.finpackfx.controller.POController;
import com.madrone.finpackfx.entity.PurchaseOrder;

@Path("/po")
public class PORestService {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/{id}")
    public PurchaseOrder getPO(@PathParam("id") Integer id) {
    	POController poController = new POController();
    	return poController.getPurchaseOrder(id);
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<PurchaseOrder> getPOList() {
    	POController poController = new POController();
    	return poController.getPurchaseOrderList();
    }
}
