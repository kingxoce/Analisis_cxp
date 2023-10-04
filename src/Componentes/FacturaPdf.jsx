import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Estilos para el PDF
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 30,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    margin: 5,
    fontSize: 12,
    textAlign: 'justify',
  },
});

const FacturaPdf = ({ facturaData }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Factura</Text>
        <Text style={styles.subtitle}>Detalles de la factura:</Text>
        <Text style={styles.text}>Número de factura: {facturaData ? facturaData.id : ''}</Text>
      </View>
    </Page>
  </Document>
);

export default FacturaPdf;