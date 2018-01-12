Blockly.JavaScript['hello'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 
  `
  <div id="bored" 
  class="step" data-x="0" data-y="0">
  Darren code - [标题]
</div>
<div class="step" data-x="500" data-y="0">
  This is slide 2
</div>
  `;
  return code;
};

Blockly.JavaScript['impress_step'] = function(block) {
  var number_data_x = block.getFieldValue('data-x');
  var number_data_y = block.getFieldValue('data-y');
  var number_data_z = block.getFieldValue('data-z');
  var number_data_rotate_x = block.getFieldValue('data-rotate-x');
  var number_data_rotate_y = block.getFieldValue('data-rotate-y');
  var number_data_rotate_z = block.getFieldValue('data-rotate-z');
  var number_data_scale = block.getFieldValue('data-scale');
  var dropdown_font_family = block.getFieldValue('font-family');
  var statements_step = Blockly.JavaScript.statementToCode(block, 'step');
  // TODO: Assemble JavaScript into code variable.
  var code = 
  `
    <div class="step" data-x="${number_data_x}" data-y="${number_data_y}" data-z="${number_data_z}"
    data-rotate-x="${number_data_rotate_x}" data-rotate-y="${number_data_rotate_y}" data-rotate-z="${number_data_rotate_z}"
    data-scale="${number_data_scale}" style="font-family:${dropdown_font_family}">
    ${statements_step}
    </div>
  `;
  return code;
};

Blockly.JavaScript['impress_start'] = function(block) {
  var number_data_x = block.getFieldValue('data-x');
  var number_data_y = block.getFieldValue('data-y');
  var number_data_z = block.getFieldValue('data-z');
  var number_data_rotate_x = block.getFieldValue('data-rotate-x');
  var number_data_rotate_y = block.getFieldValue('data-rotate-y');
  var number_data_rotate_z = block.getFieldValue('data-rotate-z');
  var number_data_scale = block.getFieldValue('data-scale');
  var dropdown_font_family = block.getFieldValue('font-family');
  var statements_start = Blockly.JavaScript.statementToCode(block, 'start');
  // TODO: Assemble JavaScript into code variable.
  var code = 
  `
    <div id="bored" class="step" data-x="${number_data_x}" data-y="${number_data_y}" data-z="${number_data_z}"
    data-rotate-x="${number_data_rotate_x}" data-rotate-y="${number_data_rotate_y}" data-rotate-z="${number_data_rotate_z}"
    data-scale="${number_data_scale}" style="font-family:${dropdown_font_family}">
    ${statements_start}
    </div>
  `;
  return code;
};

Blockly.JavaScript['impress_step_slide'] = function(block) {
  var number_data_x = block.getFieldValue('data-x');
  var number_data_y = block.getFieldValue('data-y');
  var number_data_z = block.getFieldValue('data-z');
  var number_data_rotate_x = block.getFieldValue('data-rotate-x');
  var number_data_rotate_y = block.getFieldValue('data-rotate-y');
  var number_data_rotate_z = block.getFieldValue('data-rotate-z');
  var number_data_scale = block.getFieldValue('data-scale');
  var dropdown_font_family = block.getFieldValue('font-family');
  var statements_step = Blockly.JavaScript.statementToCode(block, 'step');
  // TODO: Assemble JavaScript into code variable.
  var code = 
  `
    <div class="step slide" data-x="${number_data_x}" data-y="${number_data_y}" data-z="${number_data_z}"
    data-rotate-x="${number_data_rotate_x}" data-rotate-y="${number_data_rotate_y}" data-rotate-z="${number_data_rotate_z}"
    data-scale="${number_data_scale}" style="font-family:${dropdown_font_family}">
    ${statements_step}
    </div>
  `;
  return code;
};

Blockly.JavaScript['impress_block'] = function(block) {
  var statements_block = Blockly.JavaScript.statementToCode(block, 'block');
  var dropdown_text_align = block.getFieldValue('text-align');
  // TODO: Assemble JavaScript into code variable.
  var code = 
  `
  <div style="padding:40px 0;text-align:${dropdown_text_align}">
  ${statements_block}
  </div>
  `;
  return code;
};

Blockly.JavaScript['impress_inline'] = function(block) {
  var text_text = block.getFieldValue('text');
  var number_font_size = block.getFieldValue('font-size');
  var colour_color = block.getFieldValue('color');
  var checkbox_font_weight = block.getFieldValue('font-weight') == 'TRUE';
  var checkbox_font_style = block.getFieldValue('font-style') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = 
  `
  <span style="color:${colour_color};font-size:${number_font_size+'px'};
  font-weight:${checkbox_font_weight ? 'bold' : 'normal'};font-style:${checkbox_font_style ? 'italic' : 'normal'}">
  ${text_text}
  </span>
  `;
  return code;
};

Blockly.JavaScript['impress_image'] = function(block) {
  var text_src = block.getFieldValue('src');
  var number_width = block.getFieldValue('width');
  var number_height = block.getFieldValue('height');
  // TODO: Assemble JavaScript into code variable.
  var code = 
  `
  <img src="${text_src}" width="${number_width}" height="${number_height}" alt="img">
  `;
  return code;
};

Blockly.JavaScript['impress_step_overview'] = function(block) {
  var number_data_x = block.getFieldValue('data-x');
  var number_data_y = block.getFieldValue('data-y');
  var number_data_z = block.getFieldValue('data-z');
  var number_data_rotate_x = block.getFieldValue('data-rotate-x');
  var number_data_rotate_y = block.getFieldValue('data-rotate-y');
  var number_data_rotate_z = block.getFieldValue('data-rotate-z');
  var number_data_scale = block.getFieldValue('data-scale');
  // TODO: Assemble JavaScript into code variable.
  var code = 
  `
  <div id="overview" class="step" data-x="${number_data_x}" data-y="${number_data_y}" data-z="${number_data_z}"
  data-rotate-x="${number_data_rotate_x}" data-rotate-y="${number_data_rotate_y}" data-rotate-z="${number_data_rotate_z}"
  data-scale="${number_data_scale}"></div>
  `;
  return code;
};

Blockly.JavaScript['impress_inline_a'] = function(block) {
  var text_text = block.getFieldValue('text');
  var text_href = block.getFieldValue('href');
  var number_font_size = block.getFieldValue('font-size');
  var colour_color = block.getFieldValue('color');
  var checkbox_font_weight = block.getFieldValue('font-weight') == 'TRUE';
  var checkbox_font_style = block.getFieldValue('font-style') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = 
  `
  <a href="${text_href}" style="color:${colour_color};font-size:${number_font_size+'px'};
  font-weight:${checkbox_font_weight ? 'bold' : 'normal'};font-style:${checkbox_font_style ? 'italic' : 'normal'}">
  ${text_text}
  </a>
  `;
  return code;
};

Blockly.JavaScript['impress_video'] = function(block) {
  var text_src = block.getFieldValue('src');
  var dropdown_text_align = block.getFieldValue('text-align');
  // TODO: Assemble JavaScript into code variable.
  var code = 
  `
  <p align="${dropdown_text_align}">
  <video src="${text_src}" controls="controls">
  </p>
  `;
  return code;
};