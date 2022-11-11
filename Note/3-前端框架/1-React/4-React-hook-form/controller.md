```tsx
<Controller
  name="smartDetectionCondition.sensitivity"
  control={MetricLevelControl}
  render={({ field }) => (
    
  )}
/>


<Dropdown
  {...field}
  styles={{ dropdown: { width: '100%' } }}
  selectedKey={field.value}
  placeholder="Select an option"
  disabled={detectionMethodsOperatorIsDisabled}
  options={detectionMethodsOperatorOptions}
  onChange={(event, option) => {
    if (option && option.key) {
      field.onChange(option.key);
    }
  }}
/>

 <Slider
  {...field}
  min={0}
  max={100}
  step={1}
  value={field.value}
  onChange={(value) => {
    if (value) {
      field.onChange(value);
    }
  }}
  showValue
  snapToStep
/>

 <TextField
    {...field}
    onChange={(e, v) => {
      if (!v || v.length <= datasetlengthLimit) {
        field.onChange(v || '');
      }
    }}
    label={t('dataset.dataset-name')}
    errorMessage={errors.datasetName?.message}
    required
  />


  <Stack tokens={{ childrenGap: 20, padding: '20px 0 0' }}>
            <Stack.Item>
              <CustomTooltip tips="Sensitivity tips">
                <Label>Sensitivity</Label>
              </CustomTooltip>
              <Controller
                name="smartDetectionCondition.sensitivity"
                control={MetricLevelControl}
                render={({ field }) => (
                  <Slider
                    {...field}
                    min={0}
                    max={100}
                    step={1}
                    value={field.value}
                    onChange={(value) => {
                      if (value) {
                        field.onChange(value);
                      }
                    }}
                    showValue
                    snapToStep
                  />
                )}
              />
            </Stack.Item>

            <Stack.Item>
              <Label>Anomaly definition</Label>
              <Stack horizontal verticalAlign="center" tokens={{ childrenGap: 8 }}>
                <Text>Value</Text>
                <Controller
                  name="smartDetectionCondition.anomalyDetectorDirection"
                  control={MetricLevelControl}
                  render={({ field }) => (
                    <Dropdown
                      {...field} 
                      options={smartBoundaryOptions}
                      selectedKey={field.value}
                      onChange={(event, option) => {
                        if (option && option.key) {
                          field.onChange(option.key);
                        }
                      }}
                    />
                  )}
                />
                <Text>is an anomaly</Text>
              </Stack>
            </Stack.Item>

            <Stack.Item>
              <Label>Suppression rule</Label>
              <Stack horizontal wrap verticalAlign="center" tokens={{ childrenGap: 8 }}>
                <Text>Do not report anomaly until</Text>
                <Controller
                  name="smartDetectionCondition.suppressCondition.minAlertNumber"
                  control={MetricLevelControl}
                  render={({ field }) => <TextField {...field} styles={{ root: { width: 48 } }} value={field.value.toString()} />}
                />
                <Text>% of latest </Text>
                <Controller
                  name="smartDetectionCondition.suppressCondition.minAlertRatio"
                  control={MetricLevelControl}
                  render={({ field }) => <TextField {...field} styles={{ root: { width: 48 } }} value={field.value.toString()} />}
                />
                <Text>point(s) are detected as anomalies </Text>
              </Stack>
            </Stack.Item>
          </Stack>
```
