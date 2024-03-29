import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'InformacoesFinanceirasSicoobFpWebPartStrings';
import InformacoesFinanceirasSicoobFp from './components/InformacoesFinanceirasSicoobFp';
import { IInformacoesFinanceirasSicoobFpProps } from './components/IInformacoesFinanceirasSicoobFpProps';

export interface IInformacoesFinanceirasSicoobFpWebPartProps {
  description: string;
}

export default class InformacoesFinanceirasSicoobFpWebPart extends BaseClientSideWebPart<IInformacoesFinanceirasSicoobFpWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IInformacoesFinanceirasSicoobFpProps> = React.createElement(
      InformacoesFinanceirasSicoobFp,
      {
        description: this.properties.description,
        serverRelativeUrl: this.context.pageContext.site.serverRelativeUrl
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
