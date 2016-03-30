# ember-bootstrap-floating-labels

[![npm version](https://badge.fury.io/js/ember-bootstrap-floating-labels.svg)](http://badge.fury.io/js/ember-bootstrap-floating-labels)

A react like floating label addition to [ember-bootstrap](https://github.com/kaliber5/ember-bootstrap)'s `bs-form-element` component.  

![Floating Label](https://imgur.com/7EbbjBe.gif)

## Install

```bash
ember install ember-bootstrap-floating-labels
```

## Usage

Floating labels will work out of the box if the `bs-form-element` is wrapped in an __inline__ or __vertical__ `bs-form`. To manually enable the floating label feature, set the `floatLabel` property to __true__.

```hbs
{{bs-form-element value=value floatLabel=true label='Floating Label Text' placeholder='Hint Text'}}
```
