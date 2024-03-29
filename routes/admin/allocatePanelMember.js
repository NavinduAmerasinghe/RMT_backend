const express = require("express");
const APMembers = require("../../models/admin/allocatePanelMemeber");

const router = express.Router();

router.post("/", async (req, res) => {
  //console.log(req.body)
  const data = new APMembers(req.body);
  const result = await data.save();

  if (!result) {
    res.json({
      status: "FAILED",
      message: "Please check the procedure.PanelMember not Added!",
    });
  } else {
    res.json({
      status: "SUCCESS",
      message: "PanelMember Added Successfully....",
      data: result,
    });
  }
});

//get records
router.get("/", async (req, res) => {
  try {
    const result = await APMembers.find();
    if (!result) {
      res.json({
        status: "FAILED",
        message: "Not Found record",
      });
    } else {
      res.json({
        status: "SUCCESS",
        message: "Result Found",
        data: result,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

//get single record
router.get("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const result = await APMembers.findById(_id);
    if (!result) {
      res.json({
        status: "FAILED",
        message: "Not Found record",
      });
    } else {
      res.json({
        status: "SUCCESS",
        message: "One Result Found",
        data: result,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

//update record
// router.put("/:id", async(req,res)=>{
//     APMembers.findByIdAndUpdate(req.params.id)
//       .then((panel) => {
//         req.body.studentGroup ? (panel.studentGroup = req.body.studentGroup) : null,
//           req.body.feedback
//             ? (panel.feedback = req.body.feedback)
//             : null,
//           req.body.note ? (panel.note = req.body.note) : null,
//           req.body.email ? (panel.email = req.body.email) : null,
//           req.body.status ? ((panel.status = req.body.status)) : null;
//           panel
//           .save()
//           .then((panel) => res.json({
//                             status:"SUCCESS",
//                             message:"Record is updated successfully",
//                             data:panel
//                         }))
//           .catch((err) => res.json(err));
//       })
//       .catch((err) => res.json({
//                         status:"FAILED",
//                         message:"Record is not updated successfully"
//                     }));
//   });

//delete record
// router.delete("/:id", async(req,res)=>{
//     try{
//         const _id = req.params.id;
//         const result = await PanelMember.findByIdAndDelete(_id);
//         if(!result){
//             res.json({
//                 status:"FAILED",
//                 message:"Record is not Deleted successfully"
//             })
//         }
//         else{
//             res.json({
//                 status:"SUCCESS",
//                 message:"Record is Deleted successfully",
//                 data:result
//             })
//         }
//      }
//      catch(e){
//          console.log(e)
//      }
// })

module.exports = router;
