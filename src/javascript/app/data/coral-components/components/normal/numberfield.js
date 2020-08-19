/* eslint-disable no-undef */
import constants from '../../constants';

const numberfield = {
  name: 'Numberfield',
  tag: 'NF',
  category: constants.fieldCategories.STANDARD.name,
  tagColor: constants.fieldCategories.STANDARD.color,
  description: 'Number Field',
  id: 'numberfield',
  fields: [
    FIELD_DEFINITION_ID,
    FIELD_DEFINITION_LABEL,
    FIELD_DEFINITION_DESCRIPTION,
    FIELD_DEFINITION_REQUIRED,
    {
      id: 'min',
      label: 'Min',
      description: '',
      type: 'Long',
      required: false,
    },
    {
      id: 'max',
      label: 'Max',
      description: '',
      type: 'Long',
      required: false,
    },
    {
      id: 'step',
      label: 'Step',
      description: '',
      type: 'Long',
      required: false,
    },
  ],
  previewOutput: `<div>
    <label
      id="label_{id}"
      class="coral-Form-fieldlabel"
      for="{id}">{label}</label>
    <coral-numberinput
      max={max}
      min={min}
      step={step}
      name={id}>
    </coral-numberinput>
    </div>`,
  xmlOutput: `<{id}
         granite:class="cq-AspectRatio-ratio"
         jcr:primaryType="nt:unstructured"
         sling:resourceType="granite/ui/components/coral/foundation/form/numberfield"
         fieldLabel="{label}"
         min="{min}"
         max="{max}"
         name="ratio"
         step="{step}" />`,
};

export default numberfield;
