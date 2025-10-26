import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M9.5 8L13.5 8M13.5 8L19.75 8C20.7165 8 21.5 8.7835 21.5 9.75C21.5 10.7165 20.7165 11.5 19.75 11.5L13.5 11.5V16C13.5 17.6569 12.1569 19 10.5 19H5.5C3.84315 19 2.5 17.6569 2.5 16L2.5 9.5841C2.5 8.90785 2.84174 8.27739 3.40838 7.90829L6.35738 5.98731C7.68485 5.11571 8.29887 5.01657 8.96984 5.00083C9.27244 4.99373 9.57437 5.03246 9.86537 5.11571C10.5106 5.30031 11.0552 5.77679 12.1442 6.7297L13.5 8Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'HandPointingRight02',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1
        ])
    }
})
