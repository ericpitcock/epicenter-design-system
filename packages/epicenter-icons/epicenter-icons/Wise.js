import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12.4996 11H5.02414C5.01523 11 5.01077 10.9893 5.01707 10.983L9.5 6.5L7.00825 2.01486C7.00455 2.00819 7.00937 2 7.017 2H18.9852C18.9923 2 18.9971 2.00715 18.9945 2.01371L11 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Wise',
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
