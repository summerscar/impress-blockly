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