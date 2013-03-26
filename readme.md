// Proposal

ngBtnUpload 1.0

<ng-btn-upload
  ng-class="btn"
  ng-icon="icon-cloud-upload" 
  ng-action="/uploads" 
  ng-progress="progress(pct)"
  ng-complete="complete(data)"
  ng-error="error(err)"
  ng-cancel="cancel()"
  ng-disable="true"
>
Click to Upload</ng-btn-upload>

// output if no iframe needed

<span class="btn fileinput-button">
  <i class="icon-cloud-upload"></i>
  <input type="file"></input>
</span>

// output if iframe
<form action="/uploads" target="iframe">
  <span class="btn fileinput-button">
    <i class="icon-cloud-upload"></i>
    <input type="file"></input>
  </span>
</form>
<iframe></iframe>
