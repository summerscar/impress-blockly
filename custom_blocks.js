Blockly.Blocks['hello'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("hello");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['impress_step'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("step")
        .appendField("坐标X")
        .appendField(new Blockly.FieldNumber(0), "data-x")
        .appendField("Y")
        .appendField(new Blockly.FieldNumber(0), "data-y")
        .appendField("Z")
        .appendField(new Blockly.FieldNumber(0), "data-z")
        .appendField("  旋转X")
        .appendField(new Blockly.FieldNumber(0), "data-rotate-x")
        .appendField("Y")
        .appendField(new Blockly.FieldNumber(0), "data-rotate-y")
        .appendField("Z")
        .appendField(new Blockly.FieldNumber(0), "data-rotate-z")
        .appendField("  缩放")
        .appendField(new Blockly.FieldNumber(1), "data-scale")
        .appendField("字体")
        .appendField(new Blockly.FieldDropdown([["Arial","Arial"], ["sans-serif","sans-serif"], ["微软雅黑","Microsoft YaHei"], ["黑体","黑体"], ["宋体","宋体"]]), "font-family");
    this.appendStatementInput("step")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
 this.setTooltip("场景中一幕");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['impress_start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("start")
        .appendField("坐标X")
        .appendField(new Blockly.FieldNumber(0), "data-x")
        .appendField("Y")
        .appendField(new Blockly.FieldNumber(0), "data-y")
        .appendField("Z")
        .appendField(new Blockly.FieldNumber(0), "data-z")
        .appendField("  旋转X")
        .appendField(new Blockly.FieldNumber(0), "data-rotate-x")
        .appendField("Y")
        .appendField(new Blockly.FieldNumber(0), "data-rotate-y")
        .appendField("Z")
        .appendField(new Blockly.FieldNumber(0), "data-rotate-z")
        .appendField("  缩放")
        .appendField(new Blockly.FieldNumber(1), "data-scale")
        .appendField("字体")
        .appendField(new Blockly.FieldDropdown([["Arial","Arial"], ["sans-serif","sans-serif"], ["微软雅黑","Microsoft YaHei"], ["黑体","黑体"], ["宋体","宋体"]]), "font-family");
    this.appendStatementInput("start")
        .setCheck(null);
    this.setNextStatement(true, null);
    this.setColour(270);
 this.setTooltip("场景中第一幕");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['impress_step_slide'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("step_slide")
        .appendField("坐标X")
        .appendField(new Blockly.FieldNumber(0), "data-x")
        .appendField("Y")
        .appendField(new Blockly.FieldNumber(0), "data-y")
        .appendField("Z")
        .appendField(new Blockly.FieldNumber(0), "data-z")
        .appendField("  旋转X")
        .appendField(new Blockly.FieldNumber(0), "data-rotate-x")
        .appendField("Y")
        .appendField(new Blockly.FieldNumber(0), "data-rotate-y")
        .appendField("Z")
        .appendField(new Blockly.FieldNumber(0), "data-rotate-z")
        .appendField("  缩放")
        .appendField(new Blockly.FieldNumber(1), "data-scale")
        .appendField("字体")
        .appendField(new Blockly.FieldDropdown([["Arial","Arial"], ["sans-serif","sans-serif"], ["微软雅黑","Microsoft YaHei"], ["黑体","黑体"], ["宋体","宋体"]]), "font-family");
    this.appendStatementInput("step")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("场景中一幕");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['impress_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("行元素div")
        .appendField("对齐")
        .appendField(new Blockly.FieldDropdown([["left","left"], ["center","center"], ["right","right"]]), "text-align");
    this.appendStatementInput("block")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("行元素div");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['impress_inline'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("行内元素span")
        .appendField("文本")
        .appendField(new Blockly.FieldTextInput("示例文本"), "text")
        .appendField(" 字体大小")
        .appendField(new Blockly.FieldNumber(60, 12), "font-size")
        .appendField(new Blockly.FieldColour("#000000"), "color")
        .appendField("加粗")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "font-weight")
        .appendField("斜体")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "font-style");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("行内元素span");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['impress_image'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("行内元素图片")
        .appendField("链接")
        .appendField(new Blockly.FieldTextInput("https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"), "src")
        .appendField("长")
        .appendField(new Blockly.FieldNumber(500, 0), "width")
        .appendField("宽")
        .appendField(new Blockly.FieldNumber(500, 0), "height");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("行内元素image");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['impress_step_overview'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("全局预览")
        .appendField("坐标X")
        .appendField(new Blockly.FieldNumber(0), "data-x")
        .appendField("Y")
        .appendField(new Blockly.FieldNumber(0), "data-y")
        .appendField("Z")
        .appendField(new Blockly.FieldNumber(0), "data-z")
        .appendField("  旋转X")
        .appendField(new Blockly.FieldNumber(0), "data-rotate-x")
        .appendField("Y")
        .appendField(new Blockly.FieldNumber(0), "data-rotate-y")
        .appendField("Z")
        .appendField(new Blockly.FieldNumber(0), "data-rotate-z")
        .appendField("  缩放")
        .appendField(new Blockly.FieldNumber(1), "data-scale");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("全局预览");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['impress_inline_a'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("超链接")
        .appendField("文本")
        .appendField(new Blockly.FieldTextInput("百度"), "text")
        .appendField("链接")
        .appendField(new Blockly.FieldTextInput("https://www.baidu.com/"), "href")
        .appendField(" 字体大小")
        .appendField(new Blockly.FieldNumber(50, 12), "font-size")
        .appendField(new Blockly.FieldColour("#000000"), "color")
        .appendField("加粗")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "font-weight")
        .appendField("斜体")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "font-style");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("行内元素a");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['impress_video'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("视频")
        .appendField("链接")
        .appendField(new Blockly.FieldTextInput("./video/video.mp4"), "src")
        .appendField("对齐")
        .appendField(new Blockly.FieldDropdown([["left","left"], ["center","center"], ["right","right"]]), "text-align");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
 this.setTooltip("video");
 this.setHelpUrl("");
  }
};