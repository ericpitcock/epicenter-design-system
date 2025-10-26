import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M13 13.5H17L18 9.5H13V7.5C13 6.47 13 5.5 15 5.5H18V2C18 2 14.943 2 13.643 2C10.928 2 9 3.657 9 6.7V9.5H5V13.5H9V22H13V13.5Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Facebook02',
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
