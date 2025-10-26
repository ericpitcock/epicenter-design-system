import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H19C20.1046 20 21 19.1046 21 18V13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2 12.0168L4.5 9.6005C5.32843 8.79983 6.67157 8.79983 7.5 9.60051C8.32843 10.4012 8.32843 11.6993 7.5 12.5C6.67157 13.3007 6.67157 14.5988 7.5 15.3995C8.32843 16.2002 9.67157 16.2002 10.5 15.3995L11 14.9162', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13 10.5265L19.2367 4.28979C19.6231 3.9034 20.2496 3.9034 20.6359 4.28979L21.7102 5.36405C22.0966 5.75043 22.0966 6.37688 21.7102 6.76326L15.4735 13H13V10.5265Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Whiteboard',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
